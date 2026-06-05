package com.pronearbymain.service;


import com.pronearbymain.DTO.AuthResponse;
import com.pronearbymain.DTO.LoginRequestDTO;
import com.pronearbymain.DTO.OtpRequest;
import com.pronearbymain.DTO.SignupRequest;
import com.pronearbymain.entity.AdminEntity;
import com.pronearbymain.entity.Role;
import com.pronearbymain.repo.AdminRepository;
import com.pronearbymain.securityconfig.JwtUtil;
import com.pronearbymain.template.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JwtUtil jwtUtil;

    // ================= CREATE ADMIN =================
    public String createAdmin(SignupRequest request) {

        AdminEntity existingAdmin =
                adminRepository.findByEmail(request.getEmail()).orElse(null);

        if(existingAdmin != null) {
            return "Admin already exists ❌";
        }

        String otp = generateOtp();

        emailService.sendOtp(request.getEmail(), request.getName(), otp);

        AdminEntity admin = new AdminEntity();

        admin.setName(request.getName());
        admin.setEmail(request.getEmail());
        admin.setPassword(passwordEncoder.encode(request.getPassword()));
        admin.setRole(Role.ADMIN);

        admin.setOtp(otp);
        admin.setIsVerified(false);

        adminRepository.save(admin);

        return "Admin Registered Successfully ✅";
    }

    // ================= VERIFY ADMIN OTP =================
    public String verifyAdminOtp(OtpRequest request) {

        AdminEntity admin =
                adminRepository.findByEmail(request.getEmail()).orElse(null);

        if(admin == null) {
            return null;
        }

        if(admin.getOtp() != null &&
           admin.getOtp().trim().equals(request.getOtp().trim())) {

            admin.setIsVerified(true);
            admin.setOtp(null);

            adminRepository.save(admin);

            return "Admin OTP Verified Successfully ✅";
        }

        return "Invalid OTP ❌";
    }

    // ================= LOGIN ADMIN =================
    public AuthResponse loginAdmin(LoginRequestDTO request) {

        AdminEntity admin =
                adminRepository.findByEmail(request.getEmail()).orElse(null);

        if(admin == null) {
            return null;
        }

        if(!passwordEncoder.matches(request.getPassword(), admin.getPassword())) {
            throw new RuntimeException("Invalid Password ❌");
        }

        if(!admin.getIsVerified()) {
            throw new RuntimeException("Please Verify OTP First ⚠️");
        }

        String token = jwtUtil.generateToken(admin.getEmail());

        return new AuthResponse(
                token,
                admin.getRole().name(),
                "Admin Login Success ✅"
        );
    }

    // ================= OTP GENERATOR =================
    private String generateOtp() {
        return String.valueOf((int)(Math.random() * 9000) + 1000);
    }
}