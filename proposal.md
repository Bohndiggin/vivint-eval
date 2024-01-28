# Optimization Proposal #

## PROBLEM ##

Website load speed is slow. This causes people to click off our sites or even lose trust in our brand.

## DISCOVERY ##

1. Loading pages on mobile felt slow.
2. Loaded vivint.com using dev tools to throttle.
    - Observed that the phone number on the page changed - This could erode trust
3. Ran performance tool in dev tools to load page.
    - Observed that scripting took 20 seconds
4. Ran a lighthouse report using the developer tools. (attached)
    - Noted that JavaScript execution takes 8.1 seconds.
    - Discovered a large amount of trackers on the website that each need different endpoints to respond.
    - Observed that our images are PNG
5. Ran a performance insights report using developer tools (cache disabled) TTI below (time to interactive).
    - Slow 3G 6x slowdown (worst case scenerio) - DNF
    - Slow 3G no slowdown - DNF
    - Fast 3G 6x Slowdown - 27.74s
    - Fast 3G 4x Slowdown - 22.45s
    - Fast 3G no slowdown - 9.3s
    - No Network Throttling 6x cpu slowdown - 26.56s
    - No Network Throttling No SLowdown - 2.17s
6. Performance Test DOM Load time
    - Slow 3G 6x slowdown (worst case scenerio) - 37.51s
    - Slow 3G no slowdown - 31.46s
    - Fast 3G 6x Slowdown - 16.57s
    - Fast 3G 4x Slowdown - 11.81s
    - Fast 3G no slowdown - 9.12
    - No Network Throttling 6x cpu slowdown - 9.69s
    - No Network Throttling No SLowdown - 0.83s

## CONCLUSION ##

From this limited testing we can draw a few preliminary conclusions.

Network traffic causes large slowdowns. This is likely due to the large number of enpoints being hit each load. Also, using PNGs for images is another source of slowdown.

From the attached chart we see several things

- slow 3g Fails to complete test as far as Time To Interactive goes.
- fast 3g completes the test even with high CPU throttling.
- Throttling the network impedes DOM load heavily.
- Throttling CPU impedes TTI more than it impedes DOM load

NOTE! Test needs more passes.

## PROPOSAL ##

Reduce page load time to increase customer retention.

## PLAN ##

- Reduce javascript amount by simplifying use of trackers.
- Reduce network load by compressing some images.
- Optimize javascript in general to lower CPU time.

## STRATEGY ##

Reducing JS Trackers

1. Run several lighthouse tests to get a good average time it takes for each js tracker to load.
2. Analyse each js tracker and create a few lists.
    - ranked from slowest to fastest
    - highest priority to lowest priority
3. Based on findings, reduce number of js tracker
4. Run tests to see if reducing load time causes higher retention.
5. Determine if the higher retention justifies the lower amount of data collected.
6. Continue to remove non-essential code and testing until we've reached diminishing returns.

Compression

1. Compress or change image formats on our images.
2. Test to see if the lower latency is enough to increase retention

Optimization

1. Review Code.
2. Reduce where obvious.
3. Test functionality