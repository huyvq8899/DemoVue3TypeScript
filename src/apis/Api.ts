import { HttpClient, type RequestParams, ContentType } from "./http-client";


export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Departments
   * @name GetDepartmentWithPagination
   * @request GET:/api/Departments/GetDepartmentWithPagination
   * @secure
   */
  getDepartmentWithPagination = (
    query: {
      /** @format int32 */
      PageNumber: number;
      /** @format int32 */
      PageSize: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PaginatedListOfDepartmentDto, any>({
      path: `/api/Departments/GetDepartmentWithPagination`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name GetDepartmentList
   * @request GET:/api/Departments
   * @secure
   */
  getDepartmentList = (params: RequestParams = {}) =>
    this.request<DepartmentVM[], any>({
      path: `/api/Departments`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name CreateDepartment
   * @request POST:/api/Departments
   * @secure
   */
  createDepartment = (data: CreateDepartmentCommamd, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/Departments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name CheckCodeDuplicateDepartment
   * @request GET:/api/Departments/CheckCodeDuplicateDepartment
   * @secure
   */
  checkCodeDuplicateDepartment = (
    query: {
      Code: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<boolean, any>({
      path: `/api/Departments/CheckCodeDuplicateDepartment`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name CheckUsedDepartment
   * @request GET:/api/Departments/CheckUsedDepartment
   * @secure
   */
  checkUsedDepartment = (
    query: {
      /** @format guid */
      Id: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<boolean, any>({
      path: `/api/Departments/CheckUsedDepartment`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name UpdateDepartment
   * @request PUT:/api/Departments/{id}
   * @secure
   */
  updateDepartment = (id: string, data: UpdateDepartmentCommand, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Departments/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Departments
   * @name DeleteDepartment
   * @request DELETE:/api/Departments/{id}
   * @secure
   */
  deleteDepartment = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Departments/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name GetUserVMs
   * @request GET:/api/Users
   * @secure
   */
  getUserVMs = (params: RequestParams = {}) =>
    this.request<UserVM[], any>({
      path: `/api/Users`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UpdateUser
   * @request PUT:/api/Users/{id}
   * @secure
   */
  updateUser = (id: string, data: UpdateUserCommand, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Users/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name DeleteUser
   * @request DELETE:/api/Users/{id}
   * @secure
   */
  deleteUser = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Users/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name GetUsersWithPagination
   * @request GET:/api/Users/GetUsersWithPagination
   * @secure
   */
  getUsersWithPagination = (
    query: {
      /** @format int32 */
      PageNumber: number;
      /** @format int32 */
      PageSize: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PaginatedListOfUserVM, any>({
      path: `/api/Users/GetUsersWithPagination`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name CheckEmailUserDuplicate
   * @request GET:/api/Users/CheckEmailUserDuplicate
   * @secure
   */
  checkEmailUserDuplicate = (
    query: {
      Email: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<boolean, any>({
      path: `/api/Users/CheckEmailUserDuplicate`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name CreateUser
   * @request POST:/api/Users/CreateUser
   * @secure
   */
  createUser = (
    query: {
      Email: string | null;
      Password: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<string, any>({
      path: `/api/Users/CreateUser`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name PostApiUsersRegister
   * @request POST:/api/Users/register
   * @secure
   */
  postApiUsersRegister = (data: RegisterRequest, params: RequestParams = {}) =>
    this.request<void, HttpValidationProblemDetails>({
      path: `/api/Users/register`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name PostApiUsersLogin
   * @request POST:/api/Users/login
   * @secure
   */
  postApiUsersLogin = (
    data: LoginRequest,
    query?: {
      useCookies?: boolean | null;
      useSessionCookies?: boolean | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccessTokenResponse, any>({
      path: `/api/Users/login`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name PostApiUsersRefresh
   * @request POST:/api/Users/refresh
   * @secure
   */
  postApiUsersRefresh = (data: RefreshRequest, params: RequestParams = {}) =>
    this.request<AccessTokenResponse, any>({
      path: `/api/Users/refresh`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name GetApiUsersConfirmEmail
   * @request GET:/api/Users/confirmEmail
   * @secure
   */
  getApiUsersConfirmEmail = (
    query?: {
      userId?: string | null;
      code?: string | null;
      changedEmail?: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/Users/confirmEmail`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name PostApiUsersResendConfirmationEmail
   * @request POST:/api/Users/resendConfirmationEmail
   * @secure
   */
  postApiUsersResendConfirmationEmail = (data: ResendConfirmationEmailRequest, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Users/resendConfirmationEmail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name PostApiUsersForgotPassword
   * @request POST:/api/Users/forgotPassword
   * @secure
   */
  postApiUsersForgotPassword = (data: ForgotPasswordRequest, params: RequestParams = {}) =>
    this.request<void, HttpValidationProblemDetails>({
      path: `/api/Users/forgotPassword`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name PostApiUsersResetPassword
   * @request POST:/api/Users/resetPassword
   * @secure
   */
  postApiUsersResetPassword = (data: ResetPasswordRequest, params: RequestParams = {}) =>
    this.request<void, HttpValidationProblemDetails>({
      path: `/api/Users/resetPassword`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name PostApiUsersManage2Fa
   * @request POST:/api/Users/manage/2fa
   * @secure
   */
  postApiUsersManage2Fa = (data: TwoFactorRequest, params: RequestParams = {}) =>
    this.request<TwoFactorResponse, HttpValidationProblemDetails | void>({
      path: `/api/Users/manage/2fa`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name GetApiUsersManageInfo
   * @request GET:/api/Users/manage/info
   * @secure
   */
  getApiUsersManageInfo = (params: RequestParams = {}) =>
    this.request<InfoResponse, HttpValidationProblemDetails | void>({
      path: `/api/Users/manage/info`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name PostApiUsersManageInfo
   * @request POST:/api/Users/manage/info
   * @secure
   */
  postApiUsersManageInfo = (data: InfoRequest, params: RequestParams = {}) =>
    this.request<InfoResponse, HttpValidationProblemDetails | void>({
      path: `/api/Users/manage/info`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}

/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PaginatedListOfDepartmentDto {
  items?: DepartmentDto[];
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int32 */
  totalCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}

export default interface DepartmentDto {
  /** @format guid */
  id?: string;
  code?: string;
  name?: string;
  description?: string;
}

export interface DepartmentVM {
  /** @format guid */
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  /** @format date-time */
  createdDate?: string | null;
}

export interface CreateDepartmentCommamd {
  code?: string;
  name?: string;
  description?: string;
}

export interface UpdateDepartmentCommand {
  /** @format guid */
  id?: string;
  code?: string;
  name?: string;
  description?: string;
}

export interface UserVM {
  id?: string;
  userName?: string | null;
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  /** @format guid */
  departmentId?: string | null;
  password?: string | null;
}

export interface UpdateUserCommand {
  id?: string;
  fullName?: string;
  phoneNumber?: string;
  address?: string;
  /** @format guid */
  departmentId?: string | null;
}

export interface PaginatedListOfUserVM {
  items?: UserVM[];
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int32 */
  totalCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}

export type HttpValidationProblemDetails = ProblemDetails & {
  errors?: Record<string, string[]>;
  [key: string]: any;
};

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

export interface RegisterRequest {
  email?: string;
  password?: string;
}

export interface AccessTokenResponse {
  tokenType?: string;
  accessToken?: string;
  /** @format int64 */
  expiresIn?: number;
  refreshToken?: string;
}

export interface LoginRequest {
  email?: string;
  password?: string;
  twoFactorCode?: string | null;
  twoFactorRecoveryCode?: string | null;
}

export interface RefreshRequest {
  refreshToken?: string;
}

export interface ResendConfirmationEmailRequest {
  email?: string;
}

export interface ForgotPasswordRequest {
  email?: string;
}

export interface ResetPasswordRequest {
  email?: string;
  resetCode?: string;
  newPassword?: string;
}

export interface TwoFactorResponse {
  sharedKey?: string;
  /** @format int32 */
  recoveryCodesLeft?: number;
  recoveryCodes?: string[] | null;
  isTwoFactorEnabled?: boolean;
  isMachineRemembered?: boolean;
}

export interface TwoFactorRequest {
  enable?: boolean | null;
  twoFactorCode?: string | null;
  resetSharedKey?: boolean;
  resetRecoveryCodes?: boolean;
  forgetMachine?: boolean;
}

export interface InfoResponse {
  email?: string;
  isEmailConfirmed?: boolean;
}

export interface InfoRequest {
  newEmail?: string | null;
  newPassword?: string | null;
  oldPassword?: string | null;
}
