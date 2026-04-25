pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // Configure NodeJS in Jenkins global tools
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
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
