package com.example.firsttest.repos;
import com.example.firsttest.domain.Type;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TypeRepository extends MongoRepository<Type, ObjectId> {
}
