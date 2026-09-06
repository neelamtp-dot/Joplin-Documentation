---
title: How Sync Works in Joplin
---

# How Sync Works in Joplin

Joplin stores your notes locally on each device by default. Sync is what connects those separate, local copies together through a shared cloud service, so the same notes stay consistent everywhere.

## The role of a sync target

A **sync target** is the cloud service Joplin uses as the shared storage point — for example, Joplin Cloud, Dropbox, or OneDrive. Joplin itself doesn't store your notes centrally; instead, it relies on whichever sync target you connect, and each device syncs to that same target independently.

## Why the sync target you choose matters

Not all sync targets offer the same capabilities. Joplin Cloud, being Joplin's own service, includes extra features like publishing notes publicly and collaborating on shared notebooks. Dropbox and OneDrive, by contrast, only handle the syncing itself — they're general-purpose file storage services, not built specifically around Joplin's
features.

## What happens during a sync

When you click **Synchronise**, Joplin compares your local notes against what's stored in the sync target, then:

- Uploads any new or changed notes from this device
- Downloads any new or changed notes from other devices that have
 already synced

This is why syncing across multiple devices means each device needs to sync individually — there's no single moment where all devices update at once. Each device independently reaches out to the same shared sync target.

## Why this design matters

Because sync happens per-device rather than through a constant live connection, your notes remain fully usable offline — you can create, edit, and organize notes without an internet connection, and they'll sync the next time you're online and click Synchronise.