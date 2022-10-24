/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface XRayTraceEvent {
  version?: "1.0.0";
  name: string;
  id: string;
  start_time: number;
  trace_id: string;
  end_time?: number;
  origin?: string;
  in_progress?: boolean;
  user?: string;
  parent_id?: string;
  http?: Http;
  error?: boolean;
  throttle?: boolean;
  fault?: boolean;
  cause?: Cause;
  annotations?: Annotations;
  metadata?: Metadata;
  subsegments?: Subsegment[];
}
export interface Http {
  request?: {
    method?: string;
    url?: string;
    client_ip?: string;
    x_forwarded_for?: boolean;
    traced?: boolean;
  };
  response?: {
    status?: number;
    content_length?: number;
  };
}
export interface Cause {
  exceptions?: Exception[];
}
export interface Exception {
  id?: string;
  message?: string;
  type?: string;
  remote?: boolean;
  truncated?: number;
  cause?: string;
  stack?: StackFrame[];
}
export interface StackFrame {
  class_name?: string;
  file_name?: string;
  line?: number;
  method_name?: string;
}
export interface Annotations {
  [k: string]: unknown;
}
export interface Metadata {
  [k: string]: unknown;
}
export interface Subsegment {
  id: string;
  name: string;
  start_time: number;
  end_time?: number;
  origin?: string;
  in_progress?: boolean;
  trace_id?: string;
  parent_id?: string;
  type?: string;
  http?: Http;
  namespace?: string;
  error?: boolean;
  throttle?: boolean;
  fault?: boolean;
  cause?: Cause;
  annotations?: Annotations;
  metadata?: Metadata;
  subsegments?: Subsegment[];
}
