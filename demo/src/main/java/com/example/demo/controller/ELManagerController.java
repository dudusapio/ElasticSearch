package com.example.demo.controller;


import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ELManager;

@RestController
@RequestMapping("/")
public class ELManagerController {
	
	@CrossOrigin
	@RequestMapping(method = RequestMethod.GET, path = "/{must}/{mustnot}/{should}/{count}")
	public String getResult(@PathVariable String must, @PathVariable String mustnot, @PathVariable String should,@PathVariable Integer count) throws JSONException{
		String esHost = "localhost";
		int esPort = 9200;
		String esIndex = "wikipedia";
		ELManager esm = new ELManager(esHost, esPort, esIndex);
		
		return esm.search(must, mustnot, should, count, 10);
		

    }
}

