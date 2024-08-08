"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Integrity=void 0;const t=require("./SsriOption"),s=require("../../packages/log");exports.Integrity=class{constructor(i,e){this.SPEC_ALGORITHMS=["sha256","sha384","sha512"],this.SRI_REGEX=/^([a-z0-9]+)-([^?]+)([?\S*]*)$/,this.STRICT_SRI_REGEX=/^([a-z0-9]+)-([A-Za-z0-9+/=]{44,88})(\?[\x21-\x7E]*)?$/,this.BASE64_REGEX=/^[a-z0-9+/]+=?=?$/i,this.VCHAR_REGEX=/^[\x21-\x7E]+$/,this.algorithm="",this.digest="",this.options=[];const h=(e=t.Opts.mergeWithDefaultOpts(e)).strict;this.source=i.trim();const r=this.source.match(h?this.STRICT_SRI_REGEX:this.SRI_REGEX);r?h&&!this.SPEC_ALGORITHMS.some((t=>t===r[1]))||this.setIntegrityData(r):s.OhpmLazyLogger.error("","")}getAlgorithm(){return this.algorithm}getDigest(){return this.digest}getOptions(){return this.options?this.options:[]}hexDigest(){return this.getDigest()&&Buffer.from(this.getDigest(),"base64").toString("hex")}toString(s){if((s=t.Opts.mergeWithDefaultOpts(s)).strict&&!(this.SPEC_ALGORITHMS.some((t=>t===this.getAlgorithm()))&&this.getDigest().match(this.BASE64_REGEX)&&this.getOptions().every((t=>t.match(this.VCHAR_REGEX)))))return"";const i=this.getOptions().length?`?${this.getOptions().join("?")}`:"";return`${this.getAlgorithm()}-${this.getDigest()}${i}`}setIntegrityData(t){this.algorithm=t[1],this.digest=t[2];const s=t[3];s&&(this.options=s.slice(1).split("?"))}};