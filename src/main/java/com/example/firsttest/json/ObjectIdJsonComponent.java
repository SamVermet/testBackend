package com.example.firsttest.json;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.JsonNodeType;
import org.bson.types.ObjectId;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;

@JsonComponent
public class ObjectIdJsonComponent {

    public static class Serializer extends JsonSerializer<ObjectId> {

        @Override
        public void serialize(ObjectId value, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
            try {
                if (value != null) {
                    jsonGenerator.writeString(value.toString());
                } else {
                    jsonGenerator.writeNull();
                }
            } catch (Exception ex) {
                throw new IOException("Error while serializing the ObjectId", ex);
            }
        }

    }

    public static class Deserializer extends JsonDeserializer<ObjectId> {

        @Override
        public ObjectId deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            try {
                ObjectCodec oc = jsonParser.getCodec();
                JsonNode node = oc.readTree(jsonParser);

                if (JsonNodeType.OBJECT.equals(node.getNodeType()) && node.has("$oid")) {
                    String oid = node.get("$oid").asText();
                    if (oid != null && oid.length() > 0) {
                        return new ObjectId(node.get("$oid").asText());
                    } else {
                        return null;
                    }
                } else {
                    String oid = node.asText();
                    if (oid != null && oid.length() > 0) {
                        return new ObjectId(node.asText());
                    } else {
                        return null;
                    }
                }
            } catch (Exception ex) {
                throw new IOException("Error while deserializing the ObjectId", ex);
            }
        }

    }

}