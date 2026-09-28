import featureImage from "../assets/rag.png";

export const blogPosts = [
  {
    id: "spring-boot-pgvector-gemini",
    slug: "spring-boot-pgvector-gemini-rag",
    title: "Adding AI to Spring Boot with pgvector and Gemini",
    category: "AI & Engineering",
    date: "September 29, 2026",
    readTime: "5 min read",
    image: featureImage,
    imageAlt:
      "Illustration of software building blocks connected in a workflow",
    excerpt:
      "A beginner-friendly walkthrough of embeddings, vector search, RAG, and how Spring Boot, pgvector, Google embeddings, and Gemini work together to answer questions from application data.",
    content: [
      {
        type: "paragraph",
        text: "Recently I learned how AI actually works with existing applications, and I built a demo to prove it to myself. The idea is simple: keep your application, keep your database, and add a layer that understands meaning.",
      },
      { type: "heading", text: "The Stack" },
      {
        type: "list",
        ordered: false,
        items: [
          "Spring Boot with Spring AI for the application layer",
          "Google embedding model to convert text into vectors",
          "PostgreSQL + pgvector (running from a Docker image) as the vector store",
          "Gemini API as the LLM for answers and operations",
        ],
      },
      {
        type: "paragraph",
        text: "The best part: I didn't need a separate, exotic vector database. pgvector adds vector search to PostgreSQL, so my data and my embeddings live in the same database I already know.",
      },
      { type: "heading", text: "First, What Is an Embedding?" },
      {
        type: "paragraph",
        text: "An embedding is a way to turn text into a list of numbers that captures some of its meaning. For example, an embedding model might map ‘How do I reset my password?’ and ‘I forgot my login credentials’ to nearby points in a large mathematical space. The sentences use different words, but they are asking about similar things.",
      },
      {
        type: "paragraph",
        text: "Imagine every piece of text as a pin on a huge map. The map has many dimensions, so we cannot draw it on a screen, but the idea is familiar: related meanings tend to be placed near each other. The embedding is the pin's coordinates—a vector such as [0.12, -0.08, 0.31, …]. Real vectors have many more values; each model defines its own vector size and how it represents language.",
      },
      {
        type: "paragraph",
        text: "These numbers are not a dictionary where one coordinate means ‘password’ and another means ‘account’. Meaning is spread across the vector. The embedding model has learned to place text with related usage near each other from its training. We use the vector for comparison; we usually keep the original text too, because a list of numbers is not readable evidence for the answer.",
      },
      {
        type: "vector-diagram",
        title: "A tiny map of meaning",
        description:
          "This 2D sketch is only an illustration. Real embeddings have hundreds or thousands of dimensions, so their full vector space cannot be drawn on a page.",
      },
      {
        type: "example",
        title: "A toy vector comparison",
        steps: [
          {
            label: "Question vector",
            text: "‘I forgot my login credentials’ → [0.12, 0.84, 0.31, …]",
          },
          {
            label: "Nearby guide vector",
            text: "‘Reset your account password’ → [0.10, 0.80, 0.35, …]",
          },
          {
            label: "Compare meaning",
            text: "The coordinates are close in this made-up example, so the guide may be a useful match even though it uses different words.",
          },
          {
            label: "Keep the source text",
            text: "The numbers help find the guide. Gemini gets the original guide text—not just the vector—to compose an answer.",
          },
        ],
      },
      { type: "subheading", text: "Why convert both documents and questions?" },
      {
        type: "paragraph",
        text: "At indexing time, the app embeds each document chunk and saves its vector. At question time, it embeds the user's question with the compatible embedding model. Now both the stored text and the question are represented in the same space, so their vectors can be compared. The model does not search for matching words; it helps find text with a similar meaning.",
      },
      { type: "heading", text: "What Does a Vector Database Do?" },
      {
        type: "paragraph",
        text: "A vector database stores vectors and efficiently finds the nearest ones to a query vector. ‘Nearest’ is measured with a distance or similarity calculation. One common choice is cosine similarity: it compares the direction of two vectors, so vectors pointing in a similar direction score as related. The exact metric and indexing choices depend on the embedding model and application.",
      },
      {
        type: "paragraph",
        text: "A vector store record should keep more than the vector. It commonly includes the original chunk and metadata such as document ID, owner, type, or timestamp. The vector helps locate relevant material; the text gives the LLM something understandable to read; metadata helps the application filter which material is allowed and useful.",
      },
      {
        type: "paragraph",
        text: "pgvector adds a vector column and similarity search to PostgreSQL. That lets an application store embeddings alongside ordinary relational data and use PostgreSQL's transactions, backups, and access patterns. For a prototype or an application already using PostgreSQL, this can reduce infrastructure. At larger scale, index type, query latency, data volume, and operational needs should guide the design.",
      },
      { type: "heading", text: "The Core Idea: RAG" },
      {
        type: "paragraph",
        text: "This pattern is called Retrieval-Augmented Generation (RAG). It has two phases.",
      },
      {
        type: "paragraph",
        text: "The name describes the sequence: retrieve relevant information first, then give that information to a generative model. Gemini is not being retrained on every database row. Instead, the application fetches a small set of relevant text at question time and includes it in the model request as context.",
      },
      {
        type: "diagram",
        title: "How the RAG pipeline works",
        lanes: [
          {
            label: "Prepare knowledge (once, then update as needed)",
            steps: [
              "Application data",
              "Split into chunks",
              "Embedding model",
              "Store text + vectors in pgvector",
            ],
          },
          {
            label: "Answer a question (for each request)",
            steps: [
              "User question",
              "Embed the question",
              "Find similar chunks",
              "Gemini answers from context",
            ],
          },
        ],
      },
      { type: "subheading", text: "Phase 1: Store the knowledge" },
      {
        type: "list",
        ordered: true,
        items: [
          "Take data from the application (documents, records, notes).",
          "Split it into smaller chunks.",
          "Send each chunk to the Google embedding model, which returns a vector (a list of numbers that represents its meaning).",
          "Store the vector, the original text, and metadata in pgvector.",
        ],
      },
      { type: "subheading", text: "Phase 2: Answer a question" },
      {
        type: "list",
        ordered: true,
        items: [
          "The user asks a question.",
          "The question is converted into a vector using the same embedding model.",
          "pgvector finds the chunks closest in meaning (similarity search).",
          "Those chunks and the question are sent to Gemini.",
          "Gemini answers using only that context.",
        ],
      },
      {
        type: "paragraph",
        text: "The LLM doesn't need to ‘know’ your data. It reads the right pieces at the right moment.",
      },
      { type: "subheading", text: "A small example" },
      {
        type: "example",
        title: "Finding a password reset guide",
        steps: [
          {
            label: "Saved guide",
            text: "To change your password, open Account Settings and choose Reset Password.",
          },
          {
            label: "User asks",
            text: "I can't log in—where can I update my credentials?",
          },
          {
            label: "Vector search",
            text: "The question and guide use different words, but their embeddings are close in meaning. pgvector returns the guide chunk.",
          },
          {
            label: "Grounded reply",
            text: "Gemini receives the question and guide, then explains the reset steps from that source.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Retrieval is not guaranteed to find the right passage. Similarity means ‘close according to this model and metric’, not ‘factually correct’. The application can inspect scores, limit the number of results, apply metadata filters, and decline to answer when retrieval is weak. Those choices are part of building a reliable system.",
      },
      { type: "heading", text: "Chunking: Choosing What the Search Can Find" },
      {
        type: "paragraph",
        text: "Embedding an entire book as one vector gives a broad representation, but it is hard to retrieve one precise fact from it. Splitting text into chunks makes smaller passages searchable. Chunks that are too large can mix unrelated topics; chunks that are too small can lose the context needed to understand a sentence. A useful split often follows the source structure—sections, paragraphs, or records—and is tuned by trying real questions.",
      },
      {
        type: "paragraph",
        text: "Some pipelines overlap neighboring chunks so a fact near a boundary retains nearby context. Overlap also creates duplicate content in search results, so it should be used thoughtfully. Store source IDs and chunk positions so you can trace an answer back to its document and rebuild or update the right vectors later.",
      },
      { type: "heading", text: "What Happens in the Gemini Request?" },
      {
        type: "paragraph",
        text: "After retrieval, the application builds a prompt containing instructions, the user's question, and the retrieved passages. A useful instruction tells the model to answer from those passages, distinguish missing information, and avoid making up details. The model generates a natural-language response from the input it received; it does not independently verify that the passages are current or authorized.",
      },
      {
        type: "paragraph",
        text: "The retrieved passages consume context window and may contain irrelevant or even malicious text. Send only the necessary material, treat retrieved content as untrusted data, and keep system instructions separate from document text. For answers users need to trust, return source titles or links and let them inspect the supporting passages.",
      },
      { type: "heading", text: "Why Spring AI Made It Easy" },
      {
        type: "paragraph",
        text: "Spring AI gives familiar Spring-style abstractions for the pieces above: a vector store interface, an embedding model interface, and a chat client. That means:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Switching models or vector stores is mostly configuration, not a rewrite.",
          "The AI logic sits inside normal Spring services, next to my existing business code.",
          "Docker lets anyone run the whole thing locally with one command.",
        ],
      },
      { type: "heading", text: "Going Beyond Q&A" },
      {
        type: "paragraph",
        text: "The LLM can also help perform operations, such as summarizing records, classifying incoming data, or calling application functions. The model decides what is needed, and the application code executes it, so existing validation, permissions, and business rules stay in control.",
      },
      { type: "heading", text: "What I Learned" },
      {
        type: "list",
        ordered: true,
        items: [
          "Chunking matters more than the model. Poorly split data gives poor answers.",
          "Metadata is powerful. Store user, type, and date with each vector so you can filter results.",
          "Ground the answer. Instruct the model to answer only from the retrieved context and say ‘I don't know’ otherwise.",
          "Use the same embedding model for storing and searching. Mixing models breaks similarity results.",
          "Enforce security before the LLM. Filter data by user permissions before it ever reaches the model.",
          "Keep embeddings updated when source data changes.",
        ],
      },
      { type: "heading", text: "Try It Yourself" },
      {
        type: "paragraph",
        text: "I've shared the demo so you can run it locally. The repository link will be added here when available.",
      },
      {
        type: "paragraph",
        text: "If you are starting out, my advice: pick one small dataset, embed it, store it in pgvector, and ask questions. One working prototype teaches more than ten tutorials.",
      },
      {
        type: "paragraph",
        text: "I'm still learning, and I'd love your feedback. How are you integrating AI into your existing applications?",
      },
    ],
  },
];
