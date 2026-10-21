---
title: LangGraph GAIA Research Agent
description: A Python agent that routes research, calculation, document, and multimodal tasks through bounded tool workflows.
publishDate: '2026-10-01'
isFeatured: true
cover:
  src: '../../assets/images/projects/gaia-agent-architecture.svg'
  alt: Architecture diagram of the LangGraph GAIA research agent and its routed workflows.
technologies:
  - Python
  - LangGraph
  - Agentic RAG
  - Multimodal tools
seo:
  title: LangGraph GAIA Research Agent
  description: A Python and LangGraph agent for research, calculation, document, and multimodal question-answering workflows.
---

This project was built as the final assignment for the Hugging Face Agents Course. It explores how an AI agent can classify a task, choose an appropriate workflow, use external tools within explicit limits, and return a useful answer across different input types.

The agent routes questions among research, calculation, attachment, and general-purpose workflows. It supports web and PDF research, document and spreadsheet handling, code, audio and video inputs, and resumable evaluation.

## What I worked on

- Designed routing between specialised task workflows.
- Implemented bounded tool loops with lean and robust execution profiles.
- Added Gemini and Hugging Face provider integrations, plus an experimental Ollama backend.
- Supported multimodal inputs and file-based research tasks.
- Added regression tests and resumable evaluation to make iterations easier to compare.

## Technologies and concepts

Python · LangGraph · Agentic retrieval · Tool routing · Multimodal workflows · Regression testing · Gemini · Hugging Face · Ollama

[View the repository on GitHub](https://github.com/franabaajo/gaia-langgraph-agent)

The diagram above is a simplified portfolio view of the implemented routing: incoming tasks are classified, dispatched to a bounded specialist workflow, and evaluated through a repeatable execution path.
