package com.chronocraft.services;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.chronocraft.dto.WatchDTO;
import com.chronocraft.entities.Watch;

public interface WatchService {
	
	public Watch addWatch(WatchDTO watchDTO) throws FileNotFoundException, IOException;
	
//	public Watch addWatch(Watch watch, MultipartFile productImmage);
//    WatchDTO createWatch(WatchDTO watchDTO);
//    WatchDTO updateWatch(int id, WatchDTO watchDTO);
    void deleteWatch(int id);
    public Watch getWatchById(int id);
    public List<Watch> getAllWatches();

	String saveImageFile(MultipartFile imageFile) throws IOException;
	//Watch addWatch(WatchDTO watchDTO, String imagePath);

	List<Watch> getWatchesSortedByPrice(boolean ascending);
}
