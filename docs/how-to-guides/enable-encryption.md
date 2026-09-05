---
title: Enable End-to-End Encryption
---

# Enable End-to-End Encryption

End-to-end encryption (E2EE) protects your notes so that only you can read them — even the sync service storing your data (like OneDrive or Dropbox) only ever sees encrypted content.

## How it works

Because Joplin syncs across multiple devices independently, you can't simply flip on encryption everywhere at once. Instead, encryption starts on **one device**, and that device generates a **master key** protected by a password you choose. Every other device then picks up that same key the next time it syncs.

:::danger Important
The password you set cannot be recovered. If you forget it, your encrypted notes can't be decrypted. Store it somewhere safe.
:::

## Step 1: Enable encryption on your first device

Pick one device to start with — ideally your desktop app, since it typically has more processing power than a phone, making the initial encryption faster.

1. Open the encryption settings
2. Turn encryption on
3. Set a password — this becomes your master key password

## Step 2: Sync that device fully

Once encryption is on, all of your existing notes need to be re-uploaded in encrypted form. Click **Synchronise** and let it run to completion. With a large number of notes, this can take a while — it's safe to leave it running rather than cancel it.

## Step 3: Bring in your other devices, one at a time

On each additional device:
1. Sync — the device will detect the master key
2. Enter the same password to unlock it
3. Sync again to fully complete the handoff

Do this **one device at a time**, not all at once — enabling encryption independently on multiple devices in parallel can create multiple separate keys instead of one shared key.

## What to expect afterward

Once every device is synced with encryption enabled, everything happens automatically in the background — you may occasionally see a note appear briefly encrypted before it decrypts, but this resolves on its own.

## Turning encryption off

Disabling follows the same device-by-device approach — turn it off on one device, let it fully sync, then move to the next.