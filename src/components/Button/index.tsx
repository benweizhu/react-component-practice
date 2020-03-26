import React, { MouseEventHandler } from "react";

import './index.css'

interface ButtonProps {
  id?: string,
  name?: string,
  href?: string,
  type?: 'primary' | 'secondary',
  className?: string,
  onClick?: MouseEventHandler,
  children?: React.ReactNode,
}

export default function Button(props: ButtonProps) {
  if (props.href) {
    return (
      <a
        id={props.id}
        href={props.href}
        onClick={props.onClick}
        className={getClassName(props.className, props.type)}
      >
        {props.children}
      </a>)
  }
  return (
    <button
      id={props.id}
      name={props.name}
      onClick={props.onClick}
      className={getClassName(props.className, props.type).trim()}
    >
      {props.children}
    </button>
  )
}

function getClassName(className?: string, type?: string): string {
  let typeClassName = getTypeClassName(type);
  return `practice-button ${typeClassName} ${className ? className : ''}`.trim();
}

function getTypeClassName(type?: string) {
  let typeClassName;
  if (type === 'primary') {
    typeClassName = 'practice-button-primary';
  } else if (type === 'secondary') {
    typeClassName = 'practice-button-secondary';
  } else {
    typeClassName = 'practice-button-primary';
  }
  return typeClassName;
}
