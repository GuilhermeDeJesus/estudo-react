<?php
header("Content-Type: application/json");

// Simulação de um banco de dados
$tasks = [
    ["id" => 1, "title" => "Estudar React", "isCompleted" => false],
    ["id" => 2, "title" => "Estudar Blockchain", "isCompleted" => false],
    ["id" => 3, "title" => "Estudar faculdade", "isCompleted" => false],
];

// Função para retornar tarefas
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($tasks);
}

// Função para atualizar uma tarefa
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    // Aqui você deve implementar a lógica para atualizar a tarefa no seu "banco de dados"
    // Exemplo simples:
    foreach ($tasks as &$task) {
        if ($task['id'] === $data['id']) {
            $task['isCompleted'] = !$task['isCompleted'];
        }
    }
    echo json_encode($tasks);
}
?>