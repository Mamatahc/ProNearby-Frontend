package com.pronearbymain.entity;

import jakarta.persistence.*;


import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;


    @Column(name = "otp")
    private String otp;


    @Column(name = "is_verified")
    private Boolean isVerified;



    public Long getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getPassword() { return password; }
    public Role getRole() { return role; }
    public String getOtp() { return otp; }
    public Boolean getIsVerified() { return isVerified; }

    

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }
    public void setPassword(String password) { this.password = password; }
    public void setRole(Role role) { this.role = role; }
    public void setOtp(String otp) { this.otp = otp; }
    public void setIsVerified(Boolean isVerified) { this.isVerified = isVerified; }
}