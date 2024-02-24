package utils

import (
	"math/rand"
	"strings"
)

func Print(list *[]string) string {
	length := len(*list) - 1
	// check if the list is empty
	if length > 0 {
		// get random index
		index := rand.Intn(length)
		// print the question
		question := strings.TrimSpace((*list)[index])
		// remove the question from the list
		*list = append((*list)[:index], (*list)[index+1:]...)
		return question
	} else {
		return ""
	}
}
