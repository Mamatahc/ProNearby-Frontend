package com.pronearbymain.Auth;

import com.pronearbymain.DTO.AuthResponse;
import com.pronearbymain.DTO.LoginRequestDTO;
import com.pronearbymain.DTO.OtpRequest;
import com.pronearbymain.DTO.SignupRequest;
import com.pronearbymain.service.AdminService;
import com.pronearbymain.service.ProviderService;
import com.pronearbymain.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserService userService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private ProviderService providerService;

    // =========================
    // ✅ SIGNUP
    // =========================
    public String signup(SignupRequest request) {

        if(request.getRole().equalsIgnoreCase("USER")) {
            return userService.createUser(request);
        }

        if(request.getRole().equalsIgnoreCase("PROVIDER")) {
            return providerService.createProvider(request);
        }

        return "Invalid Role";
    }    // =========================
    // ✅ VERIFY OTP
    // =========================
    public String verifyOtp(OtpRequest request) {

        String response;

        response = userService.verifyUserOtp(request);
        if(response != null) {
            return response;
        }

        response = adminService.verifyAdminOtp(request);
        if(response != null) {
            return response;
        }

        response = providerService.verifyProviderOtp(request);
        if(response != null) {
            return response;
        }

        return "User Not Found ❌";
    }
    
    public String resendOtp(String email) {

        String response;

        response = userService.resendOtp(email);
        if(response != null) {
            return response;
        }

        return "User Not Found";
    }

    // =========================
    // ✅ LOGIN
    // =========================
    public AuthResponse login(LoginRequestDTO request) {

        AuthResponse response;

        response = userService.loginUser(request);
        if(response != null) {
            return response;
        }

        response = adminService.loginAdmin(request);
        if(response != null) {
            return response;
        }

        response = providerService.loginProvider(request);
        if(response != null) {
            return response;
        }

        throw new RuntimeException("User Not Found ❌");
    }
}