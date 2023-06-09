import { request } from '@/shared/axios';
import type { AxiosResponse } from '@/shared/axios';

/**
 * 获取会议数据
 * @name getMeetingData
 * @return {Array}
 */
export function getMeetingData() {
  const url = '/api-meeting/meetingsdata/';
  return request
    .get(url, {
      $ignoreLoading: true,
    })
    .then((res: AxiosResponse) => res.data)
    .catch((e: any) => {
      throw new Error(e);
    });
}

/**
 * 获取活动数据
 * @name getActivityData
 * @return {Array} 活动数据
 */
export function getActivityData() {
  const url = '/api-meeting/activitiesdata/';
  return request
    .get(url, {
      $ignoreLoading: true,
    })
    .then((res: AxiosResponse) => res.data)
    .catch((e: any) => {
      throw new Error(e);
    });
}

/**
 * 获取活动详情数据
 * @name getActivityDetail
 * @param {string} id 活动id
 * @return {Object} 活动数据
 */
export function getActivityDetail(id: string) {
  const url = `/api-meeting/activity/${id}/`;
  return request
    .get(url)
    .then((res: AxiosResponse) => res.data)
    .catch((e: any) => {
      throw new Error(e);
    });
}
