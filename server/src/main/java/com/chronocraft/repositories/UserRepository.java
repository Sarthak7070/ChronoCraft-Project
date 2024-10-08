package com.chronocraft.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronocraft.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	Optional<User> findByEmailIdAndPassword(String emailId, String password);
	List<User> findByRole(String role);
	User findUserById(int id);
}
