
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

export interface ProjectOfManager {
    id?: string;
    name?: string;
    description?: string;
    status?: ProjectStatus;
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
    projectOfManager(id?: string): ProjectOfManager | Promise<ProjectOfManager>;
    projectOfSupplier(id?: string): ProjectOfSupplier | Promise<ProjectOfSupplier>;
    projectOfEvaluator(id?: string): ProjectOfEvaluator | Promise<ProjectOfEvaluator>;
    projectsOfManager(page?: number, size?: number): ProjectOfManager[] | Promise<ProjectOfManager[]>;
    projectsOfSupplier(page?: number, size?: number): ProjectOfSupplier[] | Promise<ProjectOfSupplier[]>;
    projectsOfEvaluator(page?: number, size?: number): ProjectOfEvaluator[] | Promise<ProjectOfEvaluator[]>;
}

export interface IMutation {
    createProject(data?: CreateProjectInput): ProjectOfManager | Promise<ProjectOfManager>;
}
