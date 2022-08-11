package com.example.firsttest.domain;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Type")
public class Type {
    @Id
    private ObjectId id;
    private String type;

}
