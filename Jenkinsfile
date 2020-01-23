pipeline {
    agent any

    stages {
        stage('Load test') {
            steps {
                sh 'docker run -i -v //c/Users/vangala/Desktop/Performance/k6:/k6 loadimpact/k6 run /k6/build/test.js'
            }
        }
    }
}