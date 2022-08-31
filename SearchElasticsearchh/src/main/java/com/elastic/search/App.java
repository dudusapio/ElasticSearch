/*
 * To change this license header, choose License Headers in Project Properties. To change this
 * template file, choose Tools | Templates and open the template in the editor.
 */
package com.elastic.search;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

/**
 * @author Flavio
 */
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class App {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(App.class, args);
	}
}
