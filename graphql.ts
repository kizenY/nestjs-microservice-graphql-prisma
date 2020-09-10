
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum ProjectStatus {
    BIDDING = "BIDDING",
    EVALUATING = "EVALUATING",
    END = "END"
}

export interface CreateProjectInput {
    name?: string;
    description?: string;
}

export interface Bidding {
    id?: string;
    biddingDeadline?: GraphQLTimestamp;
    suppliers?: Supplier[];
    project?: Project[];
}

export interface Supplier {
    id?: string;
    code: string;
    bidding?: Bidding[];
}

export interface Project {
    id?: string;
    name?: string;
    description?: string;
    status?: ProjectStatus;
    bidding?: Bidding;
}

export interface ProjectOfSupplier {
    id?: string;
    name?: string;
    description?: string;
    status?: ProjectStatus;
}

export interface ProjectOfEvaluator {
    id?: string;
    name?: string;
    description?: string;
    status?: ProjectStatus;
}

export interface IQuery {
    projectOfManager(id?: string): Project | Promise<Project>;
    projectOfSupplier(id?: string): ProjectOfSupplier | Promise<ProjectOfSupplier>;
    projectOfEvaluator(id?: string): ProjectOfEvaluator | Promise<ProjectOfEvaluator>;
    projectsOfManager(page?: number, size?: number, cursor?: string): Project[] | Promise<Project[]>;
    projectsOfSupplier(page?: number, size?: number, cursor?: string): ProjectOfSupplier[] | Promise<ProjectOfSupplier[]>;
    projectsOfEvaluator(page?: number, size?: number, cursor?: string): ProjectOfEvaluator[] | Promise<ProjectOfEvaluator[]>;
}

export interface IMutation {
    createProject(data?: CreateProjectInput): Project | Promise<Project>;
}

export type GraphQLTimestamp = any;
