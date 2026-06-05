package com.pronearbymain.service;

import com.pronearbymain.DTO.AuthResponse;
import com.pronearbymain.DTO.LoginRequestDTO;
import com.pronearbymain.DTO.OtpRequest;
import com.pronearbymain.DTO.SignupRequest;
import com.pronearbymain.entity.ProviderEntity;
import com.pronearbymain.entity.Role;
import com.pronearbymain.repo.ProviderRepository;
import com.pronearbymain.securityconfig.JwtUtil;
import com.pronearbymain.template.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ProviderService {

    @Autowired
    private ProviderRepository providerRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JwtUtil jwtUtil;

    // ================= CREATE PROVIDER =================
    public String createProvider(SignupRequest request) {

        ProviderEntity existingProvider =
                providerRepository.findByEmail(request.getEmail()).orElse(null);

        if (existingProvider != null) {
            return "Provider already exists ❌";
        }

        String otp = generateOtp();

        ProviderEntity provider = new ProviderEntity();

        provider.setName(request.getName());
        provider.setEmail(request.getEmail());
        provider.setPassword(passwordEncoder.encode(request.getPassword()));
        provider.setRole(Role.PROVIDER);
        provider.setOtp(otp);
        provider.setIsVerified(false);

        // ✅ IMPORTANT: SAVE FIRST
        providerRepository.save(provider);

        // ✅ THEN SEND EMAIL
        emailService.sendOtp(
                request.getEmail(),
                request.getName(),
                otp
        );

        return "Provider Registered Successfully ✅";
    }

    // ================= VERIFY OTP =================
    public String verifyProviderOtp(OtpRequest request) {

        ProviderEntity provider =
                providerRepository.findByEmail(request.getEmail()).orElse(null);

        if (provider == null) {
            return "Provider not found ❌";
        }

        System.out.println("DB OTP   : " + provider.getOtp());
        System.out.println("INPUT OTP: " + request.getOtp());

        if (provider.getOtp() != null &&
                request.getOtp() != null &&
                provider.getOtp().trim().equals(request.getOtp().trim())) {

            provider.setIsVerified(true);
            provider.setOtp(null);

            providerRepository.save(provider);

            return "Provider OTP Verified Successfully ✅";
        }

        return "Invalid OTP ❌";
    }

    // ================= LOGIN =================
    public AuthResponse loginProvider(LoginRequestDTO request) {

        ProviderEntity provider =
                providerRepository.findByEmail(request.getEmail()).orElse(null);

        if (provider == null) {
            throw new RuntimeException("Provider not found ❌");
        }

        if (!passwordEncoder.matches(request.getPassword(), provider.getPassword())) {
            throw new RuntimeException("Invalid Password ❌");
        }

        if (!provider.getIsVerified()) {
            throw new RuntimeException("Please Verify OTP First ⚠️");
        }

        String token = jwtUtil.generateToken(provider.getEmail());

        return new AuthResponse(
                token,
                provider.getRole().name(),
                "Provider Login Success ✅"
        );
    }

    // ================= OTP GENERATOR =================
    private String generateOtp() {
        return String.valueOf((int) (Math.random() * 9000) + 1000);
    }
}