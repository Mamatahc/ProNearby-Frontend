package com.pronearbymain.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.pronearbymain.entity.ProviderEntity;

import java.util.Optional;

public interface ProviderRepository extends JpaRepository<ProviderEntity, Long> {

    Optional<ProviderEntity> findByEmail(String email);
}