package com.example.firsttest.service;

import com.example.firsttest.domain.Type;
import com.example.firsttest.repos.TypeRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService {

    private final TypeRepository typeRepository;

    // Constructor

    @Autowired
    public TypeService(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }

    // Actions

    public List<Type> getTypes() {
        return this.typeRepository.findAll();
    }

    public Type createTypes(Type type) {
        return this.typeRepository.save(type);
    }

    public void deleteTypes(ObjectId id) {
        this.typeRepository.deleteById(id);
    }

    public Type updateTypes(ObjectId id, Type type) {
        return this.typeRepository.save(type);
    }

    public Type getType(ObjectId id) {
        return this.typeRepository.findById(id).get();
    }

}
