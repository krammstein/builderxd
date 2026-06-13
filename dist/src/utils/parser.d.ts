import { BlockNode } from '../types';
/**
 * Convierte un string MJML o HTML en un AST de BlockNodes
 */
export declare const parseTemplateToNodes: (code: string, mode: "mjml" | "html") => BlockNode[];
