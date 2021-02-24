<template>
  <div
    class="abstract-item"
    @click="$router.push(item.path)">
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div class="img-wrapper" v-if="item.frontmatter.img && !item.excerpt">
      <div class="img" :style="getImgUrl(item)"></div>
    </div>
    <div class="abstract-content-wrap">
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
      <PageInfo
        :pageInfo="item"
        :currentTag="currentTag">
      </PageInfo>
    </div>
  </div>
</template>

<script>
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default {
  components: { PageInfo, RecoIcon },
  props: ['item', 'currentPage', 'currentTag'],
  methods: {
    getImgUrl(item){
      return {background: 'url('+item.frontmatter.img+') center center / cover no-repeat'}
    }
  },
}
</script>

<style lang="stylus" scoped>
.img-wrapper
  width: 100%;
  flex: 1;
  transition: all .5s ease-out;
  border-radius: .5rem;
  overflow: hidden;
  height: 200px;
  position: relative;
  .img
    width: 100%;
    height: 100%;
    transition: transform .5s;
    transform: scale(1.1);

.abstract-content-wrap
  margin: 0 1rem;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  display: flex;
  transition: all .3s;
  
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  display: flex;
  > * {
    pointer-events: auto;
  }  
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &::before,&::after
    box-sizing: border-box;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: center;
    transition: all .3s;
  &::before
    border-top: 2px solid $accentColor;
    border-bottom: 2px solid $accentColor;
    transform: scaleX(0);
  &::after
    border-left: 2px solid $accentColor;
    border-right: 2px solid $accentColor;
    transform: scaleY(0);
  &:hover
    box-shadow: var(--box-shadow-hover)
    &::before
      transform: scaleX(1)
    &::after
      transform: scaleY(1) 
    .img-wrapper .img
      transform scale(1)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    // &:hover a
    //   color $accentColor
    // &:hover:after
    //   visibility visible
    //   -webkit-transform: scaleX(1);
    //   transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      // &:hover
      //   color $accentColor
@media (max-width: $MQWide)
  .abstract-item 
    .abstract-content-wrap
      margin 0
    display: block
  .img-wrapper
    height: 0;
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
  .img-wrapper
    height: 180px;
</style>
