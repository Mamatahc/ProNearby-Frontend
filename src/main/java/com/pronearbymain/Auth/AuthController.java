package com.pronearbymain.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pronearbymain.DTO.AuthResponse;
import com.pronearbymain.DTO.LoginRequestDTO;
import com.pronearbymain.DTO.OtpRequest;
import com.pronearbymain.DTO.Resendotprequest;
import com.pronearbymain.DTO.SignupRequest;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(
            @RequestBody SignupRequest request) {

        String response = authService.signup(request);

        if(response.equals("User already exists") ||
           response.equals("Provider already exists")) {

            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(response);
        }

        return ResponseEntity.ok(response);
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody OtpRequest request) {

        String result = authService.verifyOtp(request);

        if ("Invalid OTP ❌".equals(result) ||
            "Provider not found ❌".equals(result) ||
            "User not found".equals(result)) {

            return ResponseEntity.badRequest().body(result);
        }

        return ResponseEntity.ok(result);
    }
    @PostMapping("/resend-otp")
    public ResponseEntity<String> resendOtp(
            @RequestBody Resendotprequest request) {

        String result =
                authService.resendOtp(request.getEmail());

        return ResponseEntity.ok(result);
    }
    
    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequestDTO request) {
        return authService.login(request);
    }
}