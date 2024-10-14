'use client'

import { useState } from 'react'
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Video {
  title: string
  thumbnailUrl: string
  embedCode: string
  description: string
}

const videoData: Video[] = [
  {
    title: "Guided Relaxation",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/43174507f08d98655a9a0dd614f9bf8c584175c0.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/ygw1koqm7r?videoFoam=true" title="Guided Relaxation V2 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "If you're feeling fear, anger, regret, or any laundry list of weight, this guided savasana will help you to relax and lighten the load. Time: ~9m"
  },
  {
    title: "Happy Hips",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/05690ed59b7802f46629c433523197bd.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/6yq8n15f29?videoFoam=true" title="Happy Hips Yoga Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "For the more experienced yogi, try this moderate level mini flow that is guaranteed to have your hips open and happy, in no time. Difficulty: ⚫⚫⚪ Time: ~27m"
  },
  {
  title: "Surrender and Let Go",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/1e391f11b7a0e21f7e066d2be78d1fb1.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/vpwpvkxgpl?videoFoam=true" title="Surrender and Let Go Yoga Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "In this yoga practice with Lilly, you'll be encouraged to surrender and let go of stuck feelings + emotions, while building strength and resilience.\nDifficulty: ⚫⚪⚪ Time: ~20m"
  },
  {
    title: "Yoga Tune-Up",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/3809ea7a7a4bf52fe19fa763116ba41f.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/rvhh14p2m4?videoFoam=true" title="Yoga Tune-Up Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Join Peter for a quick yoga tune-up practice. \nDifficulty: ⚫⚪⚪ Time: ~2m"
  },
  {
    title: "Meditation 101",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/4c2fda67a59a8bb41b006faa0ddf6132.png?video_still_time=10",
    embedCode: '<div class="wistia_responsive_padding" style="padding:66.56% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/7zlk9k66ci?videoFoam=true" title="Meditation-101MP4 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Whether you meditate daily, or are a skeptic, this Meditation 101 overview is great for beginners or experts, as a review.\nTime: ~15m"
  },
  {
    title: "Breathing Into Presence",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/a215a5e6e9ed86a75509f69737cfd0b8.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:66.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/y6967zrt02?videoFoam=true" title="ARS-2-breathing-into-presence Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Life throws a lot of challenges our way, with distractions and stressors all around.  This breathing exercise will engage presence, mindful awareness, and breath.\nTime: ~15m"
  },
  {
    title: "Clearing Anxiety Meditation",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/cc0c721507d9e7506243f4d983b23a379f23b2e6.png",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/p5vay4trsz?videoFoam=true" title="Clearing-Anxiety 060821 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Follow this meditation to reduce and clear out the weight of any current anxiety.\nTime: ~18m"
  },
  {
    title: "Loving Kindness",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/4c2fda67a59a8bb41b006faa0ddf6132.png?video_still_time=10",
    embedCode: '<div class="wistia_responsive_padding" style="padding:66.67% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/msoe887evb?videoFoam=true" title="LovingKindness060821 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Loving-kindness meditation (“metta” meditation) is a great way to cultivate our propensity for kindness. It involves mentally sending goodwill, kindness, and warmth toward ourselves and others.\nTime: ~9m"
  },
  {
    title: "Pain Management Meditation",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/8f2a41dc47c3f7c4564682aaebe3e00e762fa97a.png?video_still_time=10",
    embedCode: '<div class="wistia_responsive_padding" style="padding:61.88% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/ebws73scha?videoFoam=true" title="Pain Management Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "This meditation is ideal for managing chronic pain by focusing on gentle awareness and mindfulness techniques.\nTime: ~20m"
  },
  {
    title: "Letting Go",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/cd2bc2bdcc77dec4e427496af38bc69281be8be5.png?video_still_time=10",
    embedCode: '<div class="wistia_responsive_padding" style="padding:66.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/1c7l1geozi?videoFoam=true" title="ARS-10-Letting-Go Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "So much of human suffering comes from the tight grip we hold, in relation to people, places, and things. This meditation will help you to consider where to let go and move on.\nTime: ~15m"
  },
  {
    title: "Daily Stretch",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/a03d843f9d8b064693db8fd4c5dfd8803888d631.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/b8c6t24xqz?videoFoam=true" title="Daily Stretch Yoga - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "An all-around feel-good class that will open all areas of your body and leave you feeling open, refreshed, and joyful. Great for morning, afternoon, or evening!\nDifficulty: ⚫⚪⚪ Time: ~15m"
  },
  {
    title: "Revive Yoga",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/d42dcd8925151575a4d230f8c8e7f86bc6ba05be.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/o90tmi3om9?videoFoam=true" title="Revive Yoga - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "The perfect class for whenever your body or mind needs a little wake up and refresh. Great for the morning or afternoon!\nDifficulty: ⚫⚪⚪ Time: ~16m"
  },
  {
    title: "Yoga 101",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/caca0819a8518eca709ca62c4f6db47a.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/za3by6w7mx?videoFoam=true" title="Yoga 101 - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Yoga is about more than just the poses. Instead, we use the poses in order to explore and learn about our mind, body and breath and use them to practice being present. Through a daily practice - however small - we begin to notice changes in our mood, body and feelings.\nDifficulty: 🔵⚪⚪ Time: ~11m"
  },
  {
    title: "Yoga After a Long Day",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/711362ec8ae15188c644b86fb9748d17.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/2lm7v2qsro?videoFoam=true" title="Yoga For Moving Through Emotions - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "The perfect class for when you're feeling stress, overwhelm, or burnout.\nDifficulty: ⚫⚪⚪ Time: ~15m"
  },
  {
    title: "Yoga from Bed",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/711362ec8ae15188c644b86fb9748d17.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/5xm9s17wzy?videoFoam=true" title="Yoga From Bed - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Whether you're hoping to lift your mood or just don't feel like getting out of bed yet, let's try to create a little movement toward feeling better or starting the day.\nDifficulty: ⚫⚪⚪ Time: ~10m"
  },
  {
    title: "Moving Through Emotions Yoga",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/f55bfb16f220db95fa8b9eb464cb22f7d4e72b64.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/2lm7v2qsro?videoFoam=true" title="Yoga For Moving Through Emotions - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Sometimes emotions can feel heavy, but they don't have to stay stuck. In this class we'll wiggle and shake to move through challenging emotions or feelings.\nDifficulty: ⚫⚪⚪ Time: ~22m"
  },
  {
    title: "557 Breath",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/bd875c9e1771e228390ea903e3ef6426.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/miv15t1gmj?videoFoam=true" title="5-5-7 Breath - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "The perfect breathing exercise to decrease stress or anxiety, immediately.\nTime: ~5m"
  },
  {
    title: "Alternative Nostril Breathing",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/c35d16b5debe63c3f70333f9a728c477b1b50d74.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/ijkuoc0wru?videoFoam=true" title="Alternate Nostril Breathing - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Alternate nostril breathing plays with differences between the two nostrils and two hemispheres of the brain, bringing balance and synergy to the mind and body.\nTime: ~6m"
  },
  {
    title: "Box Breath",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/a215a5e6e9ed86a75509f69737cfd0b8.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/3vgp7tk1c0?videoFoam=true" title="Box Breath - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Box breath is a simple relaxation technique that brings your breath to an even rhythm. It can help clear the mind, relax the body, and improve focus.\nTime: ~5m"
  },
  {
    title: "Deep Belly Breathing",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/6caa83259175e8084207fbbb829fe54d.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/e7uooxez8k?videoFoam=true" title="Deep Belly Breathing - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Diaphragmatic breathing helps lower heart rate, increases oxygen in the blood and cells, improves blood circulation and can improve concentration.\nTime: ~7m"
  },
  {
    title: "Mindfulness Meditation",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/06a64410c15b4fd04b09e6409f71dcaf.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/stxroob63c?videoFoam=true" title="Mindfulness Meditation - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "This meditation will bring more skill to your awareness and how to create mindful moments, even with your sitting position and body.\nTime: ~9m"
  },
  {
    title: "Yoga for Connection",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/5a911ff08eb380ae37916bea94be8747.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/eiroapkqkr?videoFoam=true" title="Yoga For Connection - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "This class will be all about connection and contact as we explore how our physical body can tune in to ourselves, and how we relate to others.\nDifficulty: ⚫⚪⚪ Time: ~18m"
  },
  {
    title: "Yoga for Accepting The Present",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/33443ba27f2827a62173b6863cc775a6.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/p1iozw4vlh?videoFoam=true" title="Accepting The Present Moment Yoga - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Join Selena and her feline guest in this heat-building class, to reveal your strength and the power presented to us when we can accept the present moment.\nDifficulty: ⚫⚫⚪ Time: ~13m"
  },
  {
    title: "Yoga for Strength and Resilience",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/e3adada6edb1f1818bec470ed846b4ba563471c0.jpg",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/vubrm5ykza?videoFoam=true" title="Yoga For Strength and Resilience - Selena Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "Build some heat in the body with warrior poses, lunges and downward facing dogs. You'll challenge your physical and mental strength in this moderate to difficult class.\nDifficulty: ⚫⚫⚪ Time: ~18m"
  },
  {
    title: "Exploring Breath",
    thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/73c7a459b05291c66ebfaffb2071ee41d6137439.png?video_still_time=10",
    embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/9f15vqvofe?videoFoam=true" title="Exploring Breath - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
    description: "This class explores a key component of yoga, the breath. This is a great daily practice to manage stress, support immunity, and cultivate a calm mental state.\nTime: ~17m"
  },
  {
  title: "Finding Balance Yoga",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/fb6aadb63f0f886397dbc4e5988c29f4.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/4wuueoa8aa?videoFoam=true" title="Finding Balance - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "This video promotes a healthy balance across all areas of daily life, and how to assess where we are currently putting our energy.\nDifficulty: ⚫⚪⚪ Time: ~16m"
},
{
  title: "Finding Flow",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/a566f24e7e9692a2ef91a75db797a55f.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/ieu0j5jb9f?videoFoam=true" title="Finding Flow - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "This practice is an opportunity to mindfully connect your movement to your breath, to unite body and mind and ultimately to explore a state of flow. This class is designed to feel like a moving meditation.\nDifficulty: ⚫⚪⚪ Time: ~20m"
},
{
  title: "Focus and Concentration Yoga",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/aac631aabcb13b85e72cf96850.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/94vok4kr7z?videoFoam=true" title="Focus and Concentration Yoga - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "Use yoga as a tool to build focus and concentration. Not only will you cultivate physical vitality in this practice, but you will also work to create mental clarity.\nDifficulty: ⚫⚪⚪ Time: ~20m"
},
{
  title: "Presence and Power Yoga",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/516b4ca46df7a3094e6dbaf4f6b83dc2.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8lbuyizmdf?videoFoam=true" title="Presence and Power - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "Return to center with presence while connecting to your internal strength in this core-focused yoga practice.\nDifficulty: ⚫⚪⚪ Time: ~18m"
},
{
  title: "Slow Flow & Deep Restoration",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/9af4625310e389adde49318e90659c847c617f76.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/2ufinptvhv?videoFoam=true" title="Slow Flow and Deep Restoration - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "Find bodily restoration with this slow flow practice. Gently flow from one movement to the next in a way that's nourishing for the body and the mind.\nDifficulty: 🔵⚪⚪ Time: ~15m"
},
{
  title: "Finding Balance Yoga",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/fb6aadb63f0f886397dbc4e5988c29f4.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/4wuueoa8aa?videoFoam=true" title="Finding Balance - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "This video promotes a healthy balance across all areas of daily life, and how to assess where we are currently putting our energy.\nDifficulty: ⚫⚪⚪ Time: ~16m"
},
{
  title: "Finding Flow",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/a566f24e7e9692a2ef91a75db797a55f.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/ieu0j5jb9f?videoFoam=true" title="Finding Flow - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "This practice is an opportunity to mindfully connect your movement to your breath, to unite body and mind and ultimately to explore a state of flow. This class is designed to feel like a moving meditation.\nDifficulty: ⚫⚪⚪ Time: ~20m"
},
{
  title: "Focus and Concentration Yoga",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/aac631aabcb13b85e72cf96850.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/94vok4kr7z?videoFoam=true" title="Focus and Concentration Yoga - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "Use yoga as a tool to build focus and concentration. Not only will you cultivate physical vitality in this practice, but you will also work to create mental clarity.\nDifficulty: ⚫⚪⚪ Time: ~20m"
},
{
  title: "Presence and Power Yoga",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/516b4ca46df7a3094e6dbaf4f6b83dc2.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8lbuyizmdf?videoFoam=true" title="Presence and Power - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "Return to center with presence while connecting to your internal strength in this core-focused yoga practice.\nDifficulty: ⚫⚪⚪ Time: ~18m"
},
{
  title: "Slow Flow & Deep Restoration",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/9af4625310e389adde49318e90659c847c617f76.jpg",
  embedCode: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/2ufinptvhv?videoFoam=true" title="Slow Flow and Deep Restoration - Lilly Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "Find bodily restoration with this slow flow practice. Gently flow from one movement to the next in a way that's nourishing for the body and the mind.\nDifficulty: 🔵⚪⚪ Time: ~15m"
},
{
  title: "Ambient Jungle Sleep Sound",
  thumbnailUrl: "https://embed-ssl.wistia.com/deliveries/b02967ed21de9f92963a2ba1678b3bb5.png?video_still_time=10",
  embedCode: '<div class="wistia_responsive_padding" style="padding:66.75% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/iymy9jdnvm?videoFoam=true" title="AmbientJungle060821 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>\n<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
  description: "Relax or meditate to the sounds of water, instruments and animals of the Himalayas.\nTime: ~1hr"
}

  // ... Add all other videos here
]

export function VideoBrowser() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const videosPerPage = 12

  const filteredVideos = videoData.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastVideo = currentPage * videosPerPage
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo)

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setSearchTerm('')}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentVideos.map((video, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <img src={video.thumbnailUrl} alt={video.title} className="w-full h-40 object-cover rounded-lg" />
                <h3 className="mt-2 font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>{video.title}</DialogTitle>
              </DialogHeader>
              <div dangerouslySetInnerHTML={{ __html: video.embedCode }} />
              <p className="mt-4">{video.description}</p>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <p className="text-center mt-8 text-gray-500">No videos found matching your search.</p>
      )}

      {filteredVideos.length > videosPerPage && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span className="mx-4 self-center">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}