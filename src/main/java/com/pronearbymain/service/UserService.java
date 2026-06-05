package com.pronearbymain.service;


import com.pronearbymain.DTO.AuthResponse;
import com.pronearbymain.DTO.LoginRequestDTO;
import com.pronearbymain.DTO.OtpRequest;
import com.pronearbymain.DTO.SignupRequest;
import com.pronearbymain.entity.Role;
import com.pronearbymain.entity.UserEntity;
import com.pronearbymain.repo.UserRepository;
import com.pronearbymain.securityconfig.JwtUtil;
import com.pronearbymain.template.EmailService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JwtUtil jwtUtil;

    public String createUser(SignupRequest request) {

        Optional<UserEntity> existingUser =
                userRepository.findByEmail(request.getEmail());

        if (existingUser.isPresent()) {
            return "User already exists";
        }

        String otp = generateOtp();

        emailService.sendOtp(request.getEmail(), request.getName(), otp);

        UserEntity user = new UserEntity();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);
        user.setOtp(otp);
        user.setIsVerified(false);

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public String verifyUserOtp(OtpRequest request) {

        UserEntity user =
                userRepository.findByEmail(request.getEmail()).orElse(null);

        if(user == null) {
            return "User not found";
        }

        if(user.getOtp() != null &&
           user.getOtp().trim().equals(request.getOtp().trim())) {

            user.setIsVerified(true);
            user.setOtp(null);

            userRepository.save(user);

            return "OTP Verified Successfully";
        }

        return "Invalid OTP";
    }

    public AuthResponse loginUser(LoginRequestDTO request) {

        UserEntity user =
                userRepository.findByEmail(request.getEmail()).orElse(null);

        if(user == null) {
            throw new RuntimeException("User not found");
        }

        if(!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new RuntimeException("Invalid Password");
        }

        if(!user.getIsVerified()) {
            throw new RuntimeException("Please Verify OTP First");
        }

        String token =
                jwtUtil.generateToken(user.getEmail());

        return new AuthResponse(
                token,
                user.getRole().name(),
                "Login Success"
        );
    }

    private String generateOtp() {
        return String.valueOf(
                (int)(Math.random() * 9000) + 1000
        );
    }
    
    public String resendOtp(String email) {

        UserEntity user =
                userRepository.findByEmail(email)
                        .orElse(null);

        if(user == null) {
            return "User not found";
        }

        String otp = generateOtp();

        user.setOtp(otp);

        userRepository.save(user);

        emailService.sendOtp(
                user.getEmail(),
                user.getName(),
                otp
        );

        return "OTP Sent Successfully";
    }
}