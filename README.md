# 14islands Technical Recreation

**GitHub Repository:** [https://github.com/Dpehect/14islands.git](https://github.com/Dpehect/14islands.git)

This project is a high-fidelity technical recreation of the 14islands agency website, architected as a distributed microservices system designed for deployment on Azure. The implementation focuses on blending high-end creative frontend engineering with robust, scalable backend infrastructure.

## System Architecture

The repository is structured as a monorepo, separating concerns into specialized services that communicate over a virtualized network.

### Frontend Application (React)
The presentation layer is built with React 19 and Vite, emphasizing performance and fluid motion. 
- **State Management**: Redux Toolkit handles global UI state, navigation transitions, and cached content synchronization.
- **Animation Engine**: A combination of GSAP (GreenSock) for complex scroll-triggered timelines and Framer Motion for component-level transitions.
- **Smooth Scrolling**: Lenis is utilized to normalize scrolling behavior across different browsers and devices, ensuring a premium tactile feel.
- **Spatial Graphics**: React Three Fiber (Three.js) powers interactive 3D elements in the background, offloading complex rendering to the GPU.
- **Styling**: SCSS modules with a strict design token system for consistent typography and spacing.

### Content Service (Node.js & Express)
A specialized service responsible for managing project metadata, journal entries, and studio information.
- **Runtime**: Node.js with TypeScript and ESM.
- **Persistence**: Integrated with Azure CosmosDB using the MongoDB API. This provides global scale and low-latency data access.
- **Validation**: Strict schema enforcement through Mongoose.
- **Development Philosophy**: Built using Test-Driven Development (TDD) with Vitest to ensure API reliability before implementation.

### Interaction Service (FastAPI)
A high-performance Python-based service designed to handle real-time interactions and computational logic.
- **Framework**: FastAPI for asynchronous request handling and automatic OpenAPI documentation.
- **Purpose**: Primarily used for experimental AI features or high-throughput interaction tracking.

## Infrastructure and Orchestration

The project is designed to be cloud-native, following the 12-factor app methodology.

### Containerization
Each service includes a multi-stage Dockerfile optimized for production. The build process minimizes image size and ensures that environment-specific configurations are injected at runtime.

### Orchestration
- **Docker Compose**: Used for local development to simulate the microservices environment, including a containerized database instance.
- **Kubernetes (AKS)**: Provided manifests include Deployment and Service definitions for Azure Kubernetes Service. This setup handles automated scaling, self-healing, and load balancing across the microservices.

### Deployment Pipeline
The architecture supports CI/CD flows through Azure DevOps or GitHub Actions, targeting Azure Container Registry (ACR) and pushing updates to the AKS cluster.

## Development Setup

To initialize the development environment, ensure you have Docker and Node.js installed.

1. Install root dependencies (if any shared packages exist).
2. Configure environment variables in a .env file based on the provided examples.
3. Start the entire cluster:
   ```bash
   docker-compose up --build
   ```

The frontend will be accessible at localhost:3000, while individual service APIs can be reached at their respective ports (3001 for Content, 8000 for Interaction).

## Testing Protocol

TDD is enforced across the backend services. To run the test suite for the content service:
```bash
cd apps/content-service
npm test
```
This executes Vitest in a headless environment, verifying endpoint integrity and database schema logic.
