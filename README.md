# React TypeScript Application with E2E Testing

## Project Overview
This project demonstrates a modern React application built with TypeScript and Vite, featuring end-to-end testing capabilities using Playwright. The application is fully containerized using Docker, making it easy to deploy and test in any environment.

## Key Features
- Modern React development setup with TypeScript
- Production-ready Docker configuration
- Automated E2E testing infrastructure
- Continuous Integration ready with AWS Elastic Beanstalk deployment pipeline
- ESLint configuration for code quality
- Multi-stage Docker builds for optimized production images
- Automated deployment to AWS Elastic Beanstalk infrastructure

## Technical Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Testing**: Playwright for E2E testing
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx for production deployment

## Architecture
The project is structured into two main components:
1. **React Application (`/react-app`)**
   - Built with React and TypeScript
   - Uses Vite for fast development and optimized builds
   - Containerized with Nginx for production deployment

2. **E2E Testing Suite (`/e2e`)**
   - Playwright-based end-to-end testing
   - Configured for CI/CD environments
   - Generates comprehensive HTML and JUnit test reports

## Getting Started

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Running Tests
```bash
# Run E2E tests
cd e2e
npm install
npx playwright test
```

### Docker Deployment
```bash
# Build and run the application
docker-compose up --build
```

The application will be available at `http://localhost:80`

## Testing Strategy
- End-to-end testing with Playwright
- Automated test reporting
- CI/CD integration support
- Parallel test execution
- Cross-browser testing capabilities

## CI/CD Pipeline

### Overview
The application uses GitHub Actions for continuous integration and deployment to AWS Elastic Beanstalk. The pipeline ensures code quality and runs all tests before deploying to production.

### Pipeline Stages

1. **Build & Test**
   - Builds the React application
   - Runs ESLint checks
   - Executes E2E tests with Playwright
   - Generates test reports

2. **Docker Build**
   - Builds production Docker image
   - Runs container security scanning
   - Pushes image to Amazon ECR

3. **Deploy to AWS Elastic Beanstalk**
   - Deploys to staging environment first
   - Runs smoke tests
   - Promotes to production if all checks pass

### AWS Infrastructure
- **Elastic Beanstalk Environment**
  - Platform: Docker running on 64bit Amazon Linux 2
  - Instance type: t3.small (adjustable based on load)
  - Auto-scaling enabled: 2-4 instances
  - Load balancer: Application Load Balancer

### Deployment Configuration
```yaml
# Example Elastic Beanstalk configuration
option_settings:
  aws:elasticbeanstalk:application:environment:
    NODE_ENV: production
  aws:autoscaling:asg:
    MinSize: 2
    MaxSize: 4
  aws:elasticbeanstalk:container:docker:
    Memory: 512
```

### Automated Deployment Process
1. Tests pass on main branch
2. Docker image is built and pushed to ECR
3. Elastic Beanstalk environment is updated
4. Health checks confirm deployment success
5. Traffic is gradually shifted to new version

### Rollback Strategy
- Automatic rollback on deployment failure
- Health check failures trigger previous version restoration
- Maximum 5-minute downtime SLA

## Project Structure
```
├── react-app/          # React application
│   ├── src/           # Source code
│   ├── Dockerfile     # Production Docker configuration
│   └── vite.config.ts # Vite configuration
├── e2e/               # End-to-end tests
│   ├── tests/        # Test specifications
│   └── Dockerfile    # Testing environment configuration
└── docker-compose.yaml # Docker composition configuration
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is open-source and available under the MIT License.
