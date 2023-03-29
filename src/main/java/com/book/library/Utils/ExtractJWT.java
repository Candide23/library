package com.book.library.Utils;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

public class ExtractJWT {
    /*The Java method "payloadJWTExtraction" takes in a token string and an extraction
     string as parameters, and extracts a specific value from a JSON Web Token (JWT) token.
     It removes the "Bearer " prefix from the token string, decodes the second chunk from
     base64, stores the resulting key-value pairs in a HashMap, and iterates through each
     pair to extract the corresponding value for the given extraction parameter.
     If no match is found, the method returns null.*/

    public static String payloadJWTExtraction(String token, String extraction) {

        token.replace("Bearer ", "");

        String[] chunks = token.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();

        String payload = new String(decoder.decode(chunks[1]));

        String[] entries = payload.split(",");
        Map<String, String> map = new HashMap<String, String>();

        for (String entry : entries) {
            String[] keyValue = entry.split(":");
            if (keyValue[0].equals(extraction)) {

                int remove = 1;
                if (keyValue[1].endsWith("}")) {
                    remove = 2;
                }
                keyValue[1] = keyValue[1].substring(0, keyValue[1].length() - remove);
                keyValue[1] = keyValue[1].substring(1);

                map.put(keyValue[0], keyValue[1]);
            }
        }
        if (map.containsKey(extraction)) {
            return map.get(extraction);
        }
        return null;
    }
}
