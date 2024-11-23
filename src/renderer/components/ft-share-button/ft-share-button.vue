<template>
  <ft-icon-button
    ref="iconButton"
    :title="shareTitle"
    theme="secondary"
    :icon="['fas', 'share-alt']"
    :dropdown-modal-on-mobile="true"
    dropdown-position-x="left"
    :dropdown-position-y="dropdownPositionY"
    :force-dropdown="true"
  >
    <div>
      <div class="center">
        <ft-toggle-switch
          v-if="isVideo"
          :label="$t('Share.Include Timestamp')"
          :compact="true"
          :default-value="includeTimestamp"
          @change="updateIncludeTimestamp"
        />
      </div>
      <div class="shareLinks">
        <div
          id="youtubeShare"
          class="header shareTitle"
        >
          <span class="shareLogo youtubeLogo" /> YouTube
        </div>

        <div class="buttons">
          <ft-button
            class="action"
            aria-describedby="youtubeShareImage"
            @click="copyYoutube()"
          >
            <font-awesome-icon :icon="['fas', 'copy']" />
            {{ $t("Share.Copy Link") }}
          </ft-button>
          <ft-button
            class="action"
            aria-describedby="youtubeShareImage"
            @click="openYoutube()"
          >
            <font-awesome-icon :icon="['fas', 'globe']" />
            {{ $t("Share.Open Link") }}
          </ft-button>
          <ft-button
            v-if="isVideo || isPlaylist"
            class="action"
            aria-describedby="youtubeShareImage"
            background-color="var(--color-secondary)"
            text-color="var(--color-on-secondary)"
            @click="copyYoutubeEmbed()"
          >
            <font-awesome-icon :icon="['fas', 'copy']" />
            {{ $t("Share.Copy Embed") }}
          </ft-button>
          <ft-button
            v-if="isVideo || isPlaylist"
            class="action"
            aria-describedby="youtubeShareImage"
            background-color="var(--color-secondary)"
            text-color="var(--color-on-secondary)"
            @click="openYoutubeEmbed()"
          >
            <font-awesome-icon :icon="['fas', 'globe']" />
            {{ $t("Share.Open Embed") }}
          </ft-button>
        </div>

        <div class="divider" />

        <div
          id="invidiousShare"
          class="header shareTitle"
        >
          <span class="shareLogo invidiousLogo" /> Invidious
        </div>

        <div class="buttons">
          <ft-button
            aria-describedby="invidiousShare"
            class="action"
            @click="copyInvidious()"
          >
            <font-awesome-icon :icon="['fas', 'copy']" />
            {{ $t("Share.Copy Link") }}
          </ft-button>
          <ft-button
            aria-describedby="invidiousShare"
            class="action"
            @click="openInvidious()"
          >
            <font-awesome-icon :icon="['fas', 'globe']" />
            {{ $t("Share.Open Link") }}
          </ft-button>
          <ft-button
            v-if="isVideo || isPlaylist"
            aria-describedby="invidiousShare"
            class="action"
            background-color="var(--color-secondary)"
            text-color="var(--color-on-secondary)"
            @click="copyInvidiousEmbed()"
          >
            <font-awesome-icon :icon="['fas', 'copy']" />
            {{ $t("Share.Copy Embed") }}
          </ft-button>
          <ft-button
            v-if="isVideo || isPlaylist"
            aria-describedby="invidiousShare"
            class="action"
            background-color="var(--color-secondary)"
            text-color="var(--color-on-secondary)"
            @click="openInvidiousEmbed()"
          >
            <font-awesome-icon :icon="['fas', 'globe']" />
            {{ $t("Share.Open Embed") }}
          </ft-button>
        </div>
      </div>
    </div>
  </ft-icon-button>
</template>

<script src="./ft-share-button.js" />
<style scoped src="./ft-share-button.css" />
