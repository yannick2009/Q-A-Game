package utils

import (
	"log"
	"os"
	"strings"
)

func FileReader(file_path string) []string {
	// read file and get the content => []bytes
	contentBytes, err := os.ReadFile(file_path)
	if err != nil {
		log.Fatalf("unable to read file: %v", err)
	}
	// split and get each question
	var questionsList []string = strings.Split(string(contentBytes), "|")
	return questionsList
}
