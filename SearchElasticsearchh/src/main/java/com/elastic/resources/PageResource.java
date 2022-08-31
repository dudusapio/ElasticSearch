package com.elastic.resources;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elastic.search.ELManager;

@RestController
@RequestMapping("/")
public class PageResource {

	@GetMapping(value = "/{must}/{mustnot}/{should}")
	public Object getResult(@PathVariable String must, @PathVariable String mustnot, @PathVariable String should){
		String result = "teste";
		String esHost = "localhost";
		int esPort = 9200;
		String esIndex = "wikipedia";
		ELManager esm = new ELManager(esHost, esPort, esIndex);
		
		result = esm.search(must, mustnot, should, 1, 10);
		
        return result;
    }
    
    @GetMapping(value="/page")
    public String retornaString(){
        return "BLA BLA BLA BLA BLA";
    }
}
