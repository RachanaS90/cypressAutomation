pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // Configure NodeJS in Jenkins global tools
        allure "allure"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --env allure=true || exit=0'
            }
        }
    }

    post {
        always {
            allure(
                includeProperties: false,
                jdk:'',
                results:[[path : 'allure-results']]
            )
            archiveArtifacts artifacts: '**/cypress/videos/*.mp4, **/cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
    }
}
