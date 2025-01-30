# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function might not be called when the component unmounts prematurely.  This often happens when the component is unmounted quickly before the effect's asynchronous operations complete.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.  The problem stems from incorrect or missing cleanup in the useEffect hook, leading to potential memory leaks and unexpected behavior.

## Problem:
The initial implementation of `useEffect` lacks robust cleanup leading to potential issues when the component unmounts rapidly.

## Solution:
The solution utilizes a flag to determine if the component is still mounted before performing any cleanup actions after an asynchronous operation.