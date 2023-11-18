---
title: 阅读 remote-git-tags 源码
author: Sea
toc: true
date: 2023-11-18 09:53:28
cover: https://cdn.jsdelivr.net/gh/MrSeaWave/figure-bed-profile@main/uPic/2022/pLHqhA_inhyuk-lee-1.jpg
tags: [analysis]
categories: [analysis]
---

## 前言

是个很久，重新开始阅读源码的过程，因此找个相对比较简单的包[remote-git-tags](https://github.com/sindresorhus/remote-git-tags.git)进行阅读，并熟悉整套阅读流程（git subtree,vscode 中 nodejs 调试）

<!--more-->

## 介绍

[remote-git-tags](https://github.com/sindresorhus/remote-git-tags.git) 是一个只有 22 行的相对比较简单的包，他的主要作用就是获取仓库中的所有 tags
