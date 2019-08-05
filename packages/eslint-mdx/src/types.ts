import { JSXElement, JSXFragment } from '@babel/types'

import { Linter, AST } from 'eslint'
import { Node, Parent, Point } from 'unist'

export type JsxNode = (JSXElement | JSXFragment) & { range: [number, number] }

export type JsxTypes = readonly [JSXElement['type'], JSXFragment['type']]

export type JsxType = JsxTypes[number]

export type Arrayable<T> = T[] | readonly T[]

export type ParserFn = (
  code: string,
  options: Linter.ParserOptions,
) => AST.Program | Linter.ESLintParseResult

export interface LocationError {
  column?: number
  index?: number
  lineNumber?: number
}

export interface ParserOptions extends Linter.ParserOptions {
  extensions?: string | string[]
  filePath?: string
  parser?:
    | string
    | {
        parseForESLint: ParserFn
        parse: ParserFn
      }
    | ParserFn
}

export type Traverser = (node: Node, parent?: Parent) => void

export interface TraverseOptions {
  enter: Traverser
}

export interface Comment {
  fixed: string
  loc: {
    start: Point
    end: Point
  }
  origin: string
}