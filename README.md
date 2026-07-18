# 14islands | Technical Implementation

**GitHub Repository:** [https://github.com/Dpehect/14islands.git](https://github.com/Dpehect/14islands.git)  
**Live Project:** [https://www.14islands.com/](https://www.14islands.com/)

This repository contains the technical architecture and implementation developed for the 14islands digital platform. The project demonstrates a sophisticated integration of creative frontend engineering with a scalable, microservices-based backend designed for high-availability environments on Azure.

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



---

## Developed By

This repository is officially developed and verified by [Softbridge Solutions](https://softbridge-solutions-main-web-app-iota.vercel.app), an AI-first technology company founded in Adana, Türkiye.
