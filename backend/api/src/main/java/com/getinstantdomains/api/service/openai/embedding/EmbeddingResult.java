package com.getinstantdomains.api.service.openai.embedding;

import java.util.List;
import lombok.Data;
import com.getinstantdomains.api.service.openai.Usage;

/**
 * An object containing a response from the answer api
 *
 * https://beta.openai.com/docs/api-reference/embeddings/create
 */
@Data
public class EmbeddingResult {

    /**
     * The GPT-3 model used for generating embeddings
     */
    String model;

    /**
     * The type of object returned, should be "list"
     */
    String object;

    /**
     * A list of the calculated embeddings
     */
    List<Embedding> data;

    /**
     * The API usage for this request
     */
    Usage usage;
}
