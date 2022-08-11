package com.example.firsttest.controller;


import com.example.firsttest.domain.Type;
import com.example.firsttest.service.TypeService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TypeController {
    private final TypeService typeService;

    @Autowired
    public  TypeController(TypeService typeService){
        this.typeService = typeService;
    }
    @RequestMapping(value = "/types", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Type> getTypes() {
        return this.typeService.getTypes();
    }
    @RequestMapping(value = "/types", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Type createTypes(@RequestBody Type type){
        return this.typeService.createTypes(type);
    }
    @RequestMapping(value =  "/types/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Type deleteTypes(@PathVariable ObjectId id){
        typeService.deleteTypes(id);
        return null;
    }
    @RequestMapping(value = "/types/{id}", method = RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Type updateTypes(@PathVariable ObjectId id, @RequestBody Type type){
        return this.typeService.updateTypes(id, type);
    }
    @RequestMapping(value = "/types/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Type updateTypes(@PathVariable ObjectId id){
        return this.typeService.getType(id);
    }
}
