package com.chronocraft.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronocraft.entities.Watch;
@Repository
public interface WatchRepository extends JpaRepository<Watch, Integer> {
	List<Watch> findByCategoryId(int category);
//	Optional<Watch> findById(int id);
}
