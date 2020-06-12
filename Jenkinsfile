pipeline {
    agent none
    environment {
        JK_NAME = 'Thu Bui'
    }      
    stages {
        stage('Run app') {
            agent {
                node {
                    label 'master'
                }
            }
            steps {
                script{
                    sh """
                        rm -rf sample-node-app
                        git clone https://github.com/akai0211/sample-node-app.git
                        cd sample-node-app
                        docker build --no-cache -t sample-node-app:latest .
                        docker ps -q --filter name='sample-node-app' | xargs -r docker rm -f
                        docker run --env JK_NAME='$JK_NAME' --rm -dit -p 3000:3000 --name sample-node-app sample-node-app:latest
                    """
                }
            }
        }
    }
}