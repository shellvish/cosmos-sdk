(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{769:function(e,o,t){"use strict";t.r(o);var i=t(1),n=Object(i.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),t("h2",{attrs:{id:"signing-info-liveness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signing-info-liveness"}},[e._v("#")]),e._v(" Signing Info (Liveness)")]),e._v(" "),t("p",[e._v("Every block includes a set of precommits by the validators for the previous block,\nknown as the "),t("code",[e._v("LastCommitInfo")]),e._v(" provided by Tendermint. A "),t("code",[e._v("LastCommitInfo")]),e._v(" is valid so\nlong as it contains precommits from +2/3 of total voting power.")]),e._v(" "),t("p",[e._v("Proposers are incentivized to include precommits from all validators in the Tendermint "),t("code",[e._v("LastCommitInfo")]),e._v("\nby receiving additional fees proportional to the difference between the voting\npower included in the "),t("code",[e._v("LastCommitInfo")]),e._v(" and +2/3 (see "),t("RouterLink",{attrs:{to:"/modules/slashing/x/distribution/spec/03_begin_block.html"}},[e._v("fee distribution")]),e._v(").")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMYXN0Q29tbWl0SW5mbyBzdHJ1Y3QgewoJUm91bmQgaW50MzIKCVZvdGVzIFtdVm90ZUluZm8KfQo="}}),e._v(" "),t("p",[e._v("Validators are penalized for failing to be included in the "),t("code",[e._v("LastCommitInfo")]),e._v(" for some\nnumber of blocks by being automatically jailed, potentially slashed, and unbonded.")]),e._v(" "),t("p",[e._v("Information about validator's liveness activity is tracked through "),t("code",[e._v("ValidatorSigningInfo")]),e._v(".\nIt is indexed in the store as follows:")]),e._v(" "),t("ul",[t("li",[e._v("ValidatorSigningInfo: "),t("code",[e._v("0x01 | ConsAddrLen (1 byte) | ConsAddress -> ProtocolBuffer(ValSigningInfo)")])]),e._v(" "),t("li",[e._v("MissedBlocksBitArray: "),t("code",[e._v("0x02 | ConsAddrLen (1 byte) | ConsAddress | LittleEndianUint64(signArrayIndex) -> VarInt(didMiss)")]),e._v(" (varint is a number encoding format)")])]),e._v(" "),t("p",[e._v("The first mapping allows us to easily lookup the recent signing info for a\nvalidator based on the validator's consensus address.")]),e._v(" "),t("p",[e._v("The second mapping ("),t("code",[e._v("MissedBlocksBitArray")]),e._v(") acts\nas a bit-array of size "),t("code",[e._v("SignedBlocksWindow")]),e._v(" that tells us if the validator missed\nthe block for a given index in the bit-array. The index in the bit-array is given\nas little endian uint64.\nThe result is a "),t("code",[e._v("varint")]),e._v(" that takes on "),t("code",[e._v("0")]),e._v(" or "),t("code",[e._v("1")]),e._v(", where "),t("code",[e._v("0")]),e._v(" indicates the\nvalidator did not miss (did sign) the corresponding block, and "),t("code",[e._v("1")]),e._v(" indicates\nthey missed the block (did not sign).")]),e._v(" "),t("p",[e._v("Note that the "),t("code",[e._v("MissedBlocksBitArray")]),e._v(" is not explicitly initialized up-front. Keys\nare added as we progress through the first "),t("code",[e._v("SignedBlocksWindow")]),e._v(" blocks for a newly\nbonded validator. The "),t("code",[e._v("SignedBlocksWindow")]),e._v(" parameter defines the size\n(number of blocks) of the sliding window used to track validator liveness.")]),e._v(" "),t("p",[e._v("The information stored for tracking validator liveness is as follows:")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVmFsaWRhdG9yU2lnbmluZ0luZm8gZGVmaW5lcyBhIHZhbGlkYXRvcidzIHNpZ25pbmcgaW5mbyBmb3IgbW9uaXRvcmluZyB0aGVpcgovLyBsaXZlbmVzcyBhY3Rpdml0eS4KbWVzc2FnZSBWYWxpZGF0b3JTaWduaW5nSW5mbyB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICAgPSB0cnVlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIHN0cmluZyBhZGRyZXNzID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIC8vIEhlaWdodCBhdCB3aGljaCB2YWxpZGF0b3Igd2FzIGZpcnN0IGEgY2FuZGlkYXRlIE9SIHdhcyB1bmphaWxlZAogIGludDY0IHN0YXJ0X2hlaWdodCA9IDI7CiAgLy8gSW5kZXggd2hpY2ggaXMgaW5jcmVtZW50ZWQgZWFjaCB0aW1lIHRoZSB2YWxpZGF0b3Igd2FzIGEgYm9uZGVkCiAgLy8gaW4gYSBibG9jayBhbmQgbWF5IGhhdmUgc2lnbmVkIGEgcHJlY29tbWl0IG9yIG5vdC4gVGhpcyBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZQogIC8vIGBTaWduZWRCbG9ja3NXaW5kb3dgIHBhcmFtIGRldGVybWluZXMgdGhlIGluZGV4IGluIHRoZSBgTWlzc2VkQmxvY2tzQml0QXJyYXlgLgogIGludDY0IGluZGV4X29mZnNldCA9IDM7CiAgLy8gVGltZXN0YW1wIHVudGlsIHdoaWNoIHRoZSB2YWxpZGF0b3IgaXMgamFpbGVkIGR1ZSB0byBsaXZlbmVzcyBkb3dudGltZS4KICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIGphaWxlZF91bnRpbCA9IDQgWyhnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlLCAoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKICAvLyBXaGV0aGVyIG9yIG5vdCBhIHZhbGlkYXRvciBoYXMgYmVlbiB0b21ic3RvbmVkIChraWxsZWQgb3V0IG9mIHZhbGlkYXRvciBzZXQpLiBJdCBpcyBzZXQKICAvLyBvbmNlIHRoZSB2YWxpZGF0b3IgY29tbWl0cyBhbiBlcXVpdm9jYXRpb24gb3IgZm9yIGFueSBvdGhlciBjb25maWd1cmVkIG1pc2JlaGlhdm9yLgogIGJvb2wgdG9tYnN0b25lZCA9IDU7CiAgLy8gQSBjb3VudGVyIGtlcHQgdG8gYXZvaWQgdW5uZWNlc3NhcnkgYXJyYXkgcmVhZHMuCiAgLy8gTm90ZSB0aGF0IGBTdW0oTWlzc2VkQmxvY2tzQml0QXJyYXkpYCBhbHdheXMgZXF1YWxzIGBNaXNzZWRCbG9ja3NDb3VudGVyYC4KICBpbnQ2NCBtaXNzZWRfYmxvY2tzX2NvdW50ZXIgPSA2Owp9"}})],1)],1)}),[],!1,null,null,null);o.default=n.exports}}]);