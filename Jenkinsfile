pipeline {
    agent {
        docker 'node'
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
                sh "npm run build-$BRANCH_NAME"
                sh "rm -rf db && mkdir db && mv dist db && mv Dockerfile db && mv nginx.conf db"
            }
        }
    }
}
