import { ReactElement } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetQuestion, RealoadGame } from "../api/api";
import "./styles/Game.scss";
import { queryClient } from "../queryClient";
import { Link } from "react-router-dom";

export default function Game(): ReactElement {
  const { data, isLoading } = useQuery({
    queryKey: ["question"],
    queryFn: GetQuestion,
  });

  const next = useMutation({
    mutationKey: ["nextQuestion"],
    mutationFn: GetQuestion,
    onSuccess: (data) => {
      queryClient.setQueryData(["question"], data);
    },
  });
  const HandleNextQuestion = () => {
    next.mutate();
  };

  const realod = useMutation({
    mutationKey: ["realodGame"],
    mutationFn: RealoadGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["question"] });
    },
  });

  const HandleReload = () => {
    realod.mutate();
  };

  return (
    <div className="game">
      <h1>questions game</h1>
      {data?.question.length > 0 && <h3>Question</h3>}
      {isLoading && <p>Loading...</p>}
      <p>
        {data?.question.length > 0
          ? data.question
          : "Il y a plus de questions, ainsi le jeu est terminé"}
      </p>
      {data?.question.length > 0 && (
        <button id="next" onClick={HandleNextQuestion}>
          Question Suivante
        </button>
      )}
      {data?.question.length === 0 && (
        <button id="reload" onClick={HandleReload}>
          Recommencer le jeu
        </button>
      )}
      {data?.question.length === 0 && (
        <Link to="/upload">
          <button id="new">Nouveau jeu</button>
        </Link>
      )}
    </div>
  );
}
