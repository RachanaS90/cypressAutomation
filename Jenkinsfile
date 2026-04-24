pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // Configure NodeJS in Jenkins global tools
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/<your-repo>.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/cypress/videos/*.mp4, **/cypress/screenshots/**/*.png', allowEmptyArchive: true
            junit '**/results/*.xml' // if Cypress is configured to output JUnit results
        }
    }
}
