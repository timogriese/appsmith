import { BUILDER_PAGE_URL, convertToQueryParams } from "constants/routes";

export const SAAS_EDITOR_URL = (
  applicationId = ":applicationId",
  pageId = ":pageId",
  pluginPackageName = ":pluginPackageName",
): string => {
  return `${BUILDER_PAGE_URL(applicationId, pageId)}/saas/${pluginPackageName}`;
};

export const SAAS_EDITOR_DATASOURCE_ID_URL = (
  applicationId = ":applicationId",
  pageId = ":pageId",
  pluginPackageName = ":pluginPackageName",
  datasourceId = ":datasourceId",
  params = {},
): string => {
  const queryParams = convertToQueryParams(params);
  return `${SAAS_EDITOR_URL(
    applicationId,
    pageId,
    pluginPackageName,
  )}/datasoure/${datasourceId}${queryParams}`;
};

export const SAAS_EDITOR_API_ID_URL = (
  applicationId = ":applicationId",
  pageId = ":pageId",
  pluginPackageName = ":pluginPackageName",
  apiId = ":apiId",
  params = {},
): string => {
  const queryParams = convertToQueryParams(params);
  return `${SAAS_EDITOR_URL(
    applicationId,
    pageId,
    pluginPackageName,
  )}/api/${apiId}${queryParams}`;
};